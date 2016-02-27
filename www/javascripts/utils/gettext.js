// gettext-style i18n helper, Li Cai (ca168168@gmail.com)

function _(key){
	var value;
	try {
		value = i18n[key];
	}
	catch(e) {
	}
	return value || key;
}

function s_(key) {
	var subs = key.split('|'), len = subs.length, value;
    try {
		switch (len) {
			case 1:
				value = i18n[subs[0]];
				break;
			case 2:
				value = i18n[subs[0]][subs[1]];
				break;
			case 3:
				value = i18n[subs[0]][subs[1]][subs[2]];
				break;
		}
	}
	catch (e) {
		value = undefined;
	}
	return value || subs[len-1];
}
