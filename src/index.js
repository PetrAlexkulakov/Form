import './styles.scss';
import './js/validation';
import Inputmask from 'inputmask';

Inputmask({ mask: '+7 (999) 999-99-99' }).mask(document.getElementById('phone'));

