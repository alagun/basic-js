const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	'chain': [],
	getLength() {
		return this.chain.length;
	 },
	 addLink(value) {
		this.chain.push(`${value}`);
		return this;
	 },
	 removeLink(position) {
		if ((typeof position !== 'number') || position > this.chain.length ||  position < 1 ) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!')
    }
		this.chain.splice(position-1,1);
		return this;
	 },
	 reverseChain() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		this.chain.reverse();
		return this;
	 },
	 finishChain() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		const res = this.chain.join(' )~~( ');
		this.chain = [];
		return `( ${res} )`;
	 }
 };
 console.log(chainMaker)

module.exports = {
  chainMaker
};
