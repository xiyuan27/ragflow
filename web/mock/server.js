const http = require('http');

const port = process.env.MOCK_PORT || 3001;

const sendJson = (res, body) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/v1/user/info') {
    sendJson(res, {
      code: 0,
      data: {
        nickname: 'TestUser',
        avatar: '',
        language: 'en',
      },
    });
  } else if (req.method === 'POST' && req.url === '/v1/user/login') {
    sendJson(res, { code: 0, data: null });
  } else {
    sendJson(res, { code: 0, data: {} });
  }
});

server.listen(port, () => {
  console.log(`Mock API server running on http://localhost:${port}`);
});
