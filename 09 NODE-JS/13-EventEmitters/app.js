const EventEmitter = require('events')

const emitter = new EventEmitter()

// Registering an event listener
emitter.on('test1', () => {
    console.log('An event has occured in test1');
})

// Handling errors for Event-Emitters
emitter.on("error", (err) => {
  console.log("Error event:", err.message);
});

try {
    emitter.emit("test1");
    emitter.removeListener("test1");
    emitter.emit("test1"); 
} catch (error) {
    emitter.emit('error', error)
}

