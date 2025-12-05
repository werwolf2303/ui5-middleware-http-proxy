const PROXY_URL = "/proxy/test"
const JSON_LENGTH = 28237671

function proxyTest(assert) {
  const requestDone = assert.async()

  fetch(PROXY_URL).then(res => (async () => {
    console.log(res)
    const response = await res.text()
    assert.strictEqual(response.length, JSON_LENGTH)
    requestDone();
  })()).catch(error => {
    throw error
  })
}

QUnit.module("Test Proxy")

QUnit.test("Large File Test", function (assert) {
  // Test 5 times
  for(let i = 0; i < 5; i++) {
    proxyTest(assert);
  }
});
