import '../node_modules/normalize.css/normalize.css';
import './contact-style.css';
export default function createContactPage() {
    const content = document.querySelector('#content');
    content.setAttribute('class', 'content-contact')
    const title = document.createElement('p');
    title.textContent = 'Contact us';
    title.classList.add('title');
    const form = document.createElement('form');
    const submit = document.createElement('button');
    const submitConfirm = document.createElement('span');
    const submitArea = document.createElement('div');
    submitArea.append(submit, submitConfirm);
    submitArea.classList.add('submit-area');
    submit.textContent = 'Submit message';
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            document.querySelectorAll('.input').forEach(input => input.value = '');
            submitConfirm.textContent = 'Thanks for submitting a message!';
        }
        else {
            form.reportValidity();
        }
    })
    content.append(title, form);
    createInput('Your name', 'text');
    createInput('Your email', 'email');
    createInput('Your message', 'textarea');
    form.appendChild(submitArea);
}
function createInput(input, type) {
    const wrapper = document.createElement('p');
    const label = document.createElement('label');
    const asterisk = document.createElement('abbr');
    if (type !== 'textarea') {
        var inp = document.createElement('input');
        inp.setAttribute('type', type);
    }
    else {
        var inp = document.createElement('textarea');
    }
    label.setAttribute('for', input);
    label.textContent = `${input}: `;
    asterisk.textContent = '*';
    asterisk.setAttribute('title', 'Required');
    inp.setAttribute('placeholder', input);
    inp.setAttribute('id', input);
    inp.classList.add('input');
    inp.required = true;
    label.appendChild(asterisk);
    wrapper.append(label, inp);
    wrapper.classList.add('input-container');
    document.querySelector('form').appendChild(wrapper);
}