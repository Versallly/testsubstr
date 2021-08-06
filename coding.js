let test = (str1, str2) => {
	let acc = false;
 	str2
	.split('')
	.forEach( el => {
		if ( str1.indexOf(el) != -1 ) {
			acc = true;
		}
	});
	return acc;
};
// There was no requirements about case sensitivity, so I am not normalizing given strings.
// If long strings are used, I would use FOR cycle, since I can return from it at any point to save some resourses.

let substr = (str1, str2) => {
	let acc = 0;
 	str1
	.split('')
	.forEach( ( el, index ) => {
		let index1 = str2.indexOf( el );
		if ( index1 != -1 ) {
			let potentialAcc = 0,	
					nstr1 = str1.slice( index ),
					nstr2	= str2.slice( index1 );
			for (let i = 0; i < Math.min( nstr2.length, nstr1.length ); i++) {
				if ( nstr2[i] === nstr1[i] ){ 
					potentialAcc++; 
					if ( potentialAcc > acc ) {
							acc = potentialAcc;
					}
				} else {
					return;
				}
			}
		}
	});
	return acc;
};

let bonus = ( str1, str2 ) => {
	return Math.max( substr( str1, str2 ), substr( str2, str1 ) );
};
//Using 2 functions here looks more readable for me. 
//Otherwise there will be too many nested loops with conditional logic

console.log( test('wonderful', 'fulsome') );
console.log( bonus('wonderful', 'fulsome') );
