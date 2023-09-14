import {$} from '@wdio/globals';
import {describe, it} from 'mocha';
const assert = require('assert');

describe('get selector test', done => {
  it('should display welcome text', async () => {
    const element = await $(
      `~Edit App.tsx to change this screen and then come back to see your edits.`,
    );
    const isDisplayed = await element.isDisplayed();
    assert.strictEqual(isDisplayed, true, 'something wrong with this test');
  });
});

describe('Login test', done => {
  it('should be able to login', async () => {
    const element1 = await $(`~login`);
    await element1.click();
    await element1.setValue('test');

    const element2 = await $(`~password`);
    await element2.click();
    await element2.setValue('test');

    const element3 = await $(`~apply-password-login`);
    await element3.click();

    const element4 = await $(`~User test logged in`);
    const isDisplayed = await element4.isDisplayed();
    console.log('login----->>', element4);
    assert.strictEqual(isDisplayed, true, 'something wrong with this logging');

    await setTimeout(() => {}, 10000);
  });
});
