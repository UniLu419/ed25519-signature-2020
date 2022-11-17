/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
const {
  controllerDoc2020,
  mockKeyPair2020,
  mockPublicKey2020,
} = require('./mock-data.js');
const ed25519Context2018 = require('ed25519-signature-2018-context');
const {securityLoader} = require('@digitalbazaar/security-document-loader');

const loader = securityLoader();

loader.addStatic(mockKeyPair2020.controller, controllerDoc2020);
loader.addStatic(mockPublicKey2020.id, mockPublicKey2020);
loader.addStatic(ed25519Context2018.constants.CONTEXT_URL,
  ed25519Context2018.contexts.get(ed25519Context2018.constants.CONTEXT_URL));

module.exports={
  loader
}
