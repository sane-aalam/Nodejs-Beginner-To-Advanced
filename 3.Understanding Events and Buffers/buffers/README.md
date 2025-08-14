```js

What is a Buffer in Node.js?

A Buffer is a temporary storage for binary data.

It’s used when dealing with streams (files, TCP sockets, etc.).

JavaScript strings are UTF-16, but many I/O operations need raw binary (e.g., images, network packets).

Buffers let you work with raw bytes directly.

When are Buffers used?

Reading/writing files

Networking (TCP, UDP)

Handling binary formats (e.g., images, ZIP files)

Working with data streams

```