document.addEventListener("DOMContentLoaded", function() {

  var running = false;

  // Add KeyboardInterrupt exception.
  Sk.builtin.KeyboardInterrupt = function (args) {
    var o;
    if (!(this instanceof Sk.builtin.KeyboardInterrupt)) {
      o = Object.create(Sk.builtin.KeyboardInterrupt.prototype);
      o.constructor.apply(o, arguments);
      return o;
    }
    Sk.builtin.BaseException.apply(this, arguments);
  };
  Sk.abstr.setUpInheritance("KeyboardInterrupt", Sk.builtin.KeyboardInterrupt, Sk.builtin.BaseException);

  const executeBtn = document.getElementById("execute");
  const interruptBtn = document.getElementById("interrupt");
  const canvasArea = document.getElementById("canvas-area");
  const canvasElem = document.getElementById("canvas");
  const outputElem = document.getElementById("output");
  const outputDefaultMessage = document.getElementById("output-message");

  var prelude = "";
  var preludeLines = 0;

  var rejectInput = null;

  function outputElement(elem) {
    outputDefaultMessage.style.display = "none";
    const atBottom = outputElem.scrollTop + output.clientHeight >= outputElem.scrollHeight;
    outputElem.appendChild(elem);
    if (atBottom) {
      outputElem.scrollTop = outputElem.scrollHeight;
    }
  }

  function outputFunction(text) {
    const node = document.createTextNode(text);
    outputElement(node);
  }

  function inputFunction(prompt) {
    return new Promise(function(resolve, reject) {
        const node = document.createElement("div");
        const box = document.createElement("input");
        const text = document.createTextNode(prompt);
        const send = document.createElement("button");
        send.type = "button";
        send.innerText = "↵";
        send.className = "btn btn-primary";
        node.appendChild(text);
        node.appendChild(box);
        node.appendChild(send);
        const hideBox = function() {
          const answer = box.value;
          const replacement = document.createElement("span");
          replacement.innerText = answer;
          replacement.className = "user-input";
          node.replaceChild(replacement, box);
          node.removeChild(send);
          rejectInput = null;
        };
        const validate = function() {
          const answer = box.value;
          hideBox();
          resolve(answer);
        };
        send.addEventListener("click", validate);
        box.addEventListener("keypress", function(event) {
          if(event.key == "Enter") {
            validate();
          }
        });
        outputElement(node);
        rejectInput = function() {
          hideBox();
          reject();
        };
        box.focus();
    });
  }

  function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
      throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
  }

  var codeElem = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    theme: "monokai",
    indentUnit: 4,
    extraKeys: {
      'Shift-Enter': runInterpreter,
      'Cmd-Enter': runInterpreter,
      'Ctrl-Enter': runInterpreter,
    },
  });

  codeElem.on("change", resized);

  Sk.configure({
    killableWhile: true,
    killableFor: true,
    yieldLimit: 100,
    output: outputFunction,
    read: builtinRead,
    inputfun: inputFunction,
    inputfunTakesPrompt: true,
  });

  Sk.pre = "output";

  Sk.onAfterImport = function(library) {
    switch(library) {
      case 'turtle':
        canvasArea.style.display = "block";
        resized();
        break;
    }
  }

  if (!Sk.TurtleGraphics) {
    Sk.TurtleGraphics = {};
  }
  Sk.TurtleGraphics.target = 'canvas';
  Sk.TurtleGraphics.width = 600;
  Sk.TurtleGraphics.height = 400;
  canvasElem.style.width = "600px";
  canvasElem.style.height = "400px";

  function errorToString(err) {
    var msg = err.tp$name + ": " + err.tp$str().v;

    if (err.traceback.length > 0) {
      const firstFrame = err.traceback[0];
      if (firstFrame.filename === "<stdin>.py" &&
          firstFrame.lineno > preludeLines) {
        // Error located in user code.
        msg += " on line " + (firstFrame.lineno - preludeLines);
      }
      else {
        // Error in library code.
        msg += " in a library call";
        // Try to find user frame.
        var i = 1; // Set to 1 as we skip first frame.
        while (i < err.traceback.length) {
          const frame = err.traceback[i];
          if (frame.filename === "<stdin>.py" &&
              frame.lineno > preludeLines) {
            msg += " originating from line " + (frame.lineno - preludeLines);
            break;
          }
          i += 1;
        }
      }
    }

    msg += ".";

    return msg;
  }

  function runInterpreter() {
    if (running) {
      return;
    }
    running = true;
    outputDefaultMessage.innerText = "Aucune sortie à afficher.";
    outputDefaultMessage.style.display = "block";
    canvasArea.style.display = "none";
    executeBtn.disabled = true;
    interruptBtn.disabled = false;
    var prog = prelude + codeElem.getValue();
    var elem = document.getElementById("output");
    elem.innerHTML = '';
    outputDefaultMessage.classList.remove("shine");
    void outputDefaultMessage.offsetWidth;
    outputDefaultMessage.classList.add("shine");
    outputElem.classList.remove("shine");
    void outputElem.offsetWidth;
    outputElem.classList.add("shine");
    executeBtn.classList.remove("shine");
    void executeBtn.offsetWidth;
    executeBtn.classList.add("shine");
    
    var myPromise = Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, prog, true);
    }, { "*": function () {
      if (Sk.hardInterrupt === true) {
        throw new Sk.builtin.KeyboardInterrupt("interrupted");
      } else {
        return null;
      }
    }});
    myPromise.then(function() {
      executeBtn.disabled = false;
      interruptBtn.disabled = true;
      Sk.hardInterrupt = false;
      running = false;
    }, function(err) {
      executeBtn.disabled = false;
      interruptBtn.disabled = true;
      Sk.hardInterrupt = false;
      running = false;

      outputFunction(errorToString(err));
    });
  }

  function interruptInterpreter() {
    Sk.hardInterrupt = true;
    if (rejectInput != null) {
      rejectInput();
    }
  }

  interruptBtn.addEventListener("click", interruptInterpreter);
  executeBtn.addEventListener("click", runInterpreter);
  document.getElementById("execute-keyword").addEventListener("click", runInterpreter);

  function resized() {
    if (parent && parent.frameResized) {
      parent.frameResized(self);
    }
  }

  const config = { attributes: false, childList: true, subtree: true };
  const observer = new MutationObserver(resized);
  observer.observe(document.getElementById("output"), config);
  resized();

  if (parent && parent.frameResized) {
    parent.populateFrame(self, function(frame) {
      codeElem.setValue(atob(frame.dataset.code));
      if (frame.hasAttribute("data-prelude")) {
        const rawPrelude = atob(frame.dataset.prelude);
        prelude = rawPrelude + "\n";
        preludeLines = rawPrelude.split("\n").length;
      }
      if (frame.hasAttribute("data-nocontrols")) {
        document.getElementById("control-area").style.display = "none";
      }
      if (frame.hasAttribute("data-static")) {
        codeElem.setOption("readOnly", "nocursor");
      }
      if (frame.hasAttribute("data-run")) {
        runInterpreter()
      }
    });
  }
});