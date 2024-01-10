//sync - reads code synchronously - line by line
//async - start a task, offload it to the background - then start another one right away - the read and write functions can operate concurrently, they do not have to be sequentially. Once the files are read/written - the callback function is executed to indicate completion.
