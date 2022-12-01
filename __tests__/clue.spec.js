//clue.spec.js

import clue from "../src/clue.js";
import {jest} from "@jest/globals";



describe('Find a random element of the array - randomSelector', function () {
  it('Defines randomSelector', function () {
    expect(typeof clue.randomSelector).toBe('function');
  });

  it('Return undefined if the array is empty', function () {
    expect(clue.randomSelector([])).toBe(undefined);
  });

  it('Return undefined if the array is empty', function () {
    expect(clue.randomSelector([])).toBe(undefined);
  });

  it('Return the element of a single value array', function () {
    expect(clue.randomSelector(['ab'])).toBe('ab');
  });

  it('Should return an element of the array', function () {
    var array = ['ab', 'zz', 'zx', 'zy'];

    expect(array.indexOf(clue.randomSelector(array))).toBeGreaterThan(-1);
  });

  it('Return a random element of the array', function () {
    var spy = jest.spyOn(Math, 'random').mockReturnValue(0.5);

    expect(clue.randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('aab');
    spy.mockReturnValue(0.1);

    expect(clue.randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('a');
    spy.mockReturnValue(0.9);

    expect(clue.randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('kas');
  });
});

describe('Pick a random mistery - pickMistery', function () {
  it('Defines pickMistery', function () {
    expect(typeof clue.pickMistery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof clue.pickMistery()).toEqual('object');
  });

  it('Return a non empty array', function () {
    expect(clue.pickMistery().length).toBeGreaterThan(0);
  });

  it('Return an array with 3 elements', function () {
    expect(clue.pickMistery().length).toEqual(3);
  });

  it('Return a killer on the first index of the array', function () {
    expect(clue.charactersArray.indexOf(clue.pickMistery()[0])).toBeGreaterThan(-1);
  });

  it('Return a weapon on the second index of the array', function () {
    expect(clue.weaponsArray.indexOf(clue.pickMistery()[1])).toBeGreaterThan(-1);
  });

  it('Return a room in the third index of the array', function () {
    expect(clue.roomsArray.indexOf(clue.pickMistery()[2])).toBeGreaterThan(-1);
  });
});

describe('Reveal the mistery - revealMistery', function () {
  it('Defines revealMistery', function () {
    expect(typeof clue.revealMistery).toBe('function');
  });

  it('Return an string', function () {
    expect(typeof clue.revealMistery([{ first_name: 'aa', last_name: 'abc' }, { name: 'abd' }, { name: 'abb' }])).toEqual('string');
  });

  it('Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', function () {
    expect(clue.revealMistery([{ first_name: 'Victor', last_name: 'Plum' }, { name: 'poison' }, { name: 'Billiard Room' }])).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
