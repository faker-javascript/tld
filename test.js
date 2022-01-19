import test from 'ava';
import tld from './index.js';

test('tld return type to be string', t => {
    t.is(typeof tld(), 'string');
});
