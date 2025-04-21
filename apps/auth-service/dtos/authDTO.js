function validateAuthPayload(payload) {
    const { email, password } = payload;
    if (!email || !password) throw new Error('Missing email or password');
    return { email, password };
  }
  
  module.exports = { validateAuthPayload };
  