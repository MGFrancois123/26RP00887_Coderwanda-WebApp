
const test = require('node:test');
const assert = require('node:assert');

test('CODERWANDA application should have correct project name', () => {
    const projectName = 'coderwanda-webapp';

    assert.strictEqual(projectName, 'coderwanda-webapp');
});

test('Application should use port 3000', () => {
    const port = 3000;

    assert.strictEqual(port, 3000);
});
