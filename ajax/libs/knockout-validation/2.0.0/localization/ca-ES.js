/**
 * Localization file for Catalan - Catalan (ca-ES)
 */
(function(factory) {
	// Module systems magic dance.
	/*global require,ko,define*/
	if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
		// CommonJS or Node: hard-coded dependency on 'knockout'
		factory(require('knockout'));
	} else if (typeof define === "function" && define['amd']) {
		// AMD anonymous module with hard-coded dependency on 'knockout'
		define(['knockout'], factory);
	} else {
		// <script> tag: use the global `ko` object
		factory(ko);
	}
}(function(ko) {
	if (!ko.validation || typeof ko.validation.defineLocale !== 'function') {
		throw new Error('Knockout-Validation is required, please ensure it is loaded before this localization file');
	}
	return ko.validation.defineLocale('ca-ES', {
		required: 'Aquest camp es obligatori',
		min: 'Introduir un valor igual o major que {0}',
		max: 'Introduir un valor menor o igual que {0}',
		minLength: 'Ha de tenir un mínim de {0} caràcters',
		maxLength: 'No pot tenir mes de {0} caràcters',
		pattern: 'Si us plau, comproveu aquest campo',
		step: "El valor ha d'incrementar-se en {0}",
		email: 'Aquesta no es una adreça de correu electrònic correcta',
		date: 'Introduir una data correcta',
		dateISO: 'Introduir una data correcta',
		number: 'Ha de ser un nombre',
		digit: 'Introduir un dígit',
		phoneUS: 'Ha de ser un número de telèfon vàlid',
		equal: 'Els valors han de ser iguals',
		notEqual: 'Elegiu un altre valor',
		unique: 'Ha de ser un valor únic'
	});
}));
