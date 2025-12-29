let currentLanguage = 'en';

const translations = {
    en: {
        'Full Name': 'Full Name',
        'Contact Information': 'Contact Information',
        'Email': 'Email',
        'Phone': 'Phone',
        'Location': 'Location',
        'LinkedIn URL': 'LinkedIn URL',
        'GitHub URL (Optional)': 'GitHub URL (Optional)',
        'Professional Summary': 'Professional Summary',
        'Education': 'Education',
        'Experience': 'Experience',
        'Projects (Optional)': 'Projects',
        'Skills': 'Skills',
        '+ Add Education': '+ Add Education',
        '+ Add Experience': '+ Add Experience',
        '+ Add Project': '+ Add Project',
        '+ Add Skill Category': '+ Add Skill Category',
        'Download PDF': 'Download PDF',
        'Clear': 'Clear',
        'School/University': 'School/University',
        'Degree': 'Degree',
        'Year': 'Year',
        'Company': 'Company',
        'Position': 'Position',
        'Start Date': 'Start Date',
        'End Date': 'End Date',
        'Description': 'Description',
        'Project Name': 'Project Name',
        'Skill Category': 'Skill Category',
        'Skills Data': 'Skills Data',
        'Remove': 'Remove'
    },
    fr: {
        'Full Name': 'Nom Complet',
        'Contact Information': 'Informations de Contact',
        'Email': 'Email',
        'Phone': 'Téléphone',
        'Location': 'Localisation',
        'LinkedIn URL': 'URL LinkedIn',
        'GitHub URL (Optional)': 'URL GitHub (Optionnel)',
        'Professional Summary': 'Résumé Professionnel',
        'Education': 'Éducation',
        'Experience': 'Expérience',
        'Projects (Optional)': 'Projets',
        'Skills': 'Connaissances',
        '+ Add Education': '+ Ajouter Éducation',
        '+ Add Experience': '+ Ajouter Expérience',
        '+ Add Project': '+ Ajouter Projet',
        '+ Add Skill Category': '+ Ajouter Catégorie',
        'Download PDF': 'Télécharger PDF',
        'Clear': 'Effacer',
        'School/University': 'École/Université',
        'Degree': 'Diplôme',
        'Year': 'Année',
        'Company': 'Entreprise',
        'Position': 'Poste',
        'Start Date': 'Date de Début',
        'End Date': 'Date de Fin',
        'Description': 'Description',
        'Project Name': 'Nom du Projet',
        'Skill Category': 'Catégorie de Compétence',
        'Skills Data': 'Données de Compétences',
        'Remove': 'Supprimer'
    },
    it: {
        'Full Name': 'Nome Completo',
        'Contact Information': 'Informazioni di Contatto',
        'Email': 'Email',
        'Phone': 'Telefono',
        'Location': 'Posizione',
        'LinkedIn URL': 'URL LinkedIn',
        'GitHub URL (Optional)': 'URL GitHub (Opzionale)',
        'Professional Summary': 'Sommario Professionale',
        'Education': 'Istruzione',
        'Experience': 'Esperienza',
        'Projects (Optional)': 'Progetti',
        'Skills': 'Competenze',
        '+ Add Education': '+ Aggiungi Istruzione',
        '+ Add Experience': '+ Aggiungi Esperienza',
        '+ Add Project': '+ Aggiungi Progetto',
        '+ Add Skill Category': '+ Aggiungi Categoria',
        'Download PDF': 'Scarica PDF',
        'Clear': 'Cancella',
        'School/University': 'Scuola/Università',
        'Degree': 'Laurea',
        'Year': 'Anno',
        'Company': 'Azienda',
        'Position': 'Posizione',
        'Start Date': 'Data Inizio',
        'End Date': 'Data Fine',
        'Description': 'Descrizione',
        'Project Name': 'Nome Progetto',
        'Skill Category': 'Categoria Competenza',
        'Skills Data': 'Dati Competenze',
        'Remove': 'Rimuovi'
    }
};

const fieldConfigs = {
    education: [
        { class: 'edu-school', label: 'School/University' },
        { class: 'edu-degree', label: 'Degree' },
        { class: 'edu-year', label: 'Year' }
    ],
    experience: [
        { class: 'exp-company', label: 'Company' },
        { class: 'exp-position', label: 'Position' },
        { class: 'exp-start', label: 'Start Date' },
        { class: 'exp-end', label: 'End Date' },
        { class: 'exp-desc', label: 'Description', isTextarea: true }
    ],
    project: [
        { class: 'proj-name', label: 'Project Name' },
        { class: 'proj-desc', label: 'Description', isTextarea: true }
    ],
    skill: [
        { class: 'skill-category', label: 'Skill Category' },
        { class: 'skill-data', label: 'Skills Data' }
    ]
};

function t(key) {
    return translations[currentLanguage][key] || key;
}

function getContactIcon(type) {
    const icons = {
        email: `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
        phone: `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
        location: `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg></svg>`,
        linkedin: `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.424-.103.249-.129.597-.129.946v5.435h-3.554s.047-8.842 0-9.769h3.554v1.391c.432-.668 1.202-1.618 2.926-1.618 2.138 0 3.747 1.398 3.747 4.401v5.595zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.954-1.71 1.185 0 1.915.759 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.608 10.019H3.73V9.684h3.215v9.768zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`,
        github: `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    };
    return icons[type] || '';
}

function updateLanguage() {
    const languages = ['en', 'fr', 'it'];
    const currentIndex = languages.indexOf(currentLanguage);
    currentLanguage = languages[(currentIndex + 1) % languages.length];
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.dataset[currentLanguage] || el.dataset.en;
    });
    
    refreshFormLabels();
    updatePreview();
}

function refreshFormLabels() {
    const configs = [
        { container: '#educationContainer', config: fieldConfigs.education },
        { container: '#experienceContainer', config: fieldConfigs.experience },
        { container: '#projectsContainer', config: fieldConfigs.project },
        { container: '#skillsContainer', config: fieldConfigs.skill }
    ];

    configs.forEach(({ container, config }) => {
        document.querySelectorAll(`${container} .entry-group`).forEach(entry => {
            const labels = entry.querySelectorAll('label');
            const button = entry.querySelector('.remove-btn');
            
            labels.forEach((label, idx) => {
                if (config[idx]) {
                    label.textContent = t(config[idx].label);
                }
            });
            
            if (button) button.textContent = t('Remove');
        });
    });
}

function createEntryHTML(type, id, config) {
    const formGroupsHTML = config.map(field => {
        const inputType = field.isTextarea 
            ? `<textarea class="${field.class}" rows="2" placeholder=""></textarea>`
            : `<input type="text" class="${field.class}" placeholder="">`;
        
        return `
            <div class="form-group">
                <label>${t(field.label)}</label>
                ${inputType}
            </div>
        `;
    }).join('');

    return `
        <div class="entry-group" id="${type}-${id}">
            ${formGroupsHTML}
            <button type="button" class="remove-btn" onclick="removeEntry('${type}-${id}')">${t('Remove')}</button>
        </div>
    `;
}

function addEntry(type) {
    const containers = {
        education: 'educationContainer',
        experience: 'experienceContainer',
        project: 'projectsContainer',
        skill: 'skillsContainer'
    };
    
    const id = Date.now();
    const container = document.getElementById(containers[type]);
    const config = fieldConfigs[type];
    container.insertAdjacentHTML('beforeend', createEntryHTML(type, id, config));
}

function removeEntry(id) {
    const entry = document.getElementById(id);
    if (entry) {
        entry.remove();
        updatePreview();
    }
}

function collectEntries(type) {
    const selectors = {
        education: '#educationContainer .entry-group',
        experience: '#experienceContainer .entry-group',
        project: '#projectsContainer .entry-group',
        skill: '#skillsContainer .entry-group'
    };

    return Array.from(document.querySelectorAll(selectors[type])).map(entry => {
        const data = {};
        fieldConfigs[type].forEach(field => {
            data[field.class] = entry.querySelector(`.${field.class}`)?.value || '';
        });
        return data;
    });
}

function renderSection(title, entries, template) {
    if (entries.length === 0) return '';
    
    const entriesHTML = entries.map(template).join('');
    return `<div class="cv-section"><div class="cv-section-title">${title}</div>${entriesHTML}</div>`;
}

function updatePreview() {
    const name = document.getElementById('name').value || 'Your Name';
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const summary = document.getElementById('summary').value;

    let html = `<div class="cv-name" align="center">${name}</div>`;

    // Contact Information
    if (email || phone || location || linkedin || github) {
        html += `<div class="cv-contact">`;
        if (email) html += `<div class="cv-contact-item">${getContactIcon('email')}<span>${email}</span></div>`;
        if (phone) html += `<div class="cv-contact-item">${getContactIcon('phone')}<span>${phone}</span></div>`;
        if (location) html += `<div class="cv-contact-item">${getContactIcon('location')}<span>${location}</span></div>`;
        if (linkedin) {
            const linkedinUrl = linkedin.startsWith('http') ? linkedin : 'https://' + linkedin;
            html += `<div class="cv-contact-item">${getContactIcon('linkedin')}<a href="${linkedinUrl}" target="_blank">${linkedin}</a></div>`;
        }
        if (github) {
            const githubUrl = github.startsWith('http') ? github : 'https://' + github;
            html += `<div class="cv-contact-item">${getContactIcon('github')}<a href="${githubUrl}" target="_blank">${github}</a></div>`;
        }
        html += `</div>`;
    }

    // Professional Summary
    if (summary) {
        html += `<div class="cv-section">
            <div class="cv-section-title">${t('Professional Summary')}</div>
            <p style="font-size: 0.8em; line-height: 1.3; margin: 3px 0;">${summary}</p>
        </div>`;
    }

    // Education
    const educationEntries = collectEntries('education');
    html += renderSection(t('Education'), educationEntries, (entry) => {
        if (!entry['edu-school'] && !entry['edu-degree']) return '';
        return `<div class="cv-entry">
            <div class="cv-entry-title">
                <span>${entry['edu-school']}</span>
                <span class="cv-entry-date">${entry['edu-year']}</span>
            </div>
            <div class="cv-entry-subtitle">${entry['edu-degree']}</div>
        </div>`;
    });

    // Experience
    const experienceEntries = collectEntries('experience');
    html += renderSection(t('Experience'), experienceEntries, (entry) => {
        if (!entry['exp-company'] && !entry['exp-position']) return '';
        const bullets = entry['exp-desc'].split('\n').filter(line => line.trim());
        const descHtml = bullets.length > 0 
            ? `<div class="cv-entry-description"><ul>${bullets.map(b => `<li>${b.trim()}</li>`).join('')}</ul></div>`
            : '';
        return `<div class="cv-entry">
            <div class="cv-entry-title">
                <span>${entry['exp-position']}</span>
                <span class="cv-entry-date">${entry['exp-start']} - ${entry['exp-end']}</span>
            </div>
            <div class="cv-entry-subtitle">${entry['exp-company']}</div>
            ${descHtml}
        </div>`;
    });

    // Projects
    const projectEntries = collectEntries('project');
    html += renderSection(t('Projects (Optional)'), projectEntries, (entry) => {
        if (!entry['proj-name']) return '';
        const bullets = entry['proj-desc'].split('\n').filter(line => line.trim());
        const descHtml = bullets.length > 0 
            ? `<div class="cv-entry-description"><ul>${bullets.map(b => `<li>${b.trim()}</li>`).join('')}</ul></div>`
            : '';
        return `<div class="cv-entry">
            <div class="cv-entry-title"><span>${entry['proj-name']}</span></div>
            ${descHtml}
        </div>`;
    });

    // Skills
    const skillEntries = collectEntries('skill');
    html += renderSection(t('Skills'), skillEntries, (entry) => {
        if (!entry['skill-category'] && !entry['skill-data']) return '';
        return `<div class="cv-skill-category">
            <div class="cv-skill-category-name">${entry['skill-category']}:</div>
            <div class="cv-skill-category-data">${entry['skill-data']}</div>
        </div>`;
    });

    document.getElementById('cvPreview').innerHTML = html;
}

function downloadPDF() {
    const element = document.getElementById('cvPreview');
    const opt = {
        margin: 10,
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save();
    } else {
        alert('PDF library not loaded. Using print instead.');
        window.print();
    }
}

// Event Listeners
document.getElementById('langToggle').addEventListener('click', updateLanguage);
document.getElementById('addEducation').addEventListener('click', (e) => {
    e.preventDefault();
    addEntry('education');
});
document.getElementById('addExperience').addEventListener('click', (e) => {
    e.preventDefault();
    addEntry('experience');
});
document.getElementById('addProject').addEventListener('click', (e) => {
    e.preventDefault();
    addEntry('project');
});
document.getElementById('addSkill').addEventListener('click', (e) => {
    e.preventDefault();
    addEntry('skill');
});
document.getElementById('downloadPDF').addEventListener('click', (e) => {
    e.preventDefault();
    downloadPDF();
});

document.getElementById('cvForm').addEventListener('input', updatePreview);
document.getElementById('cvForm').addEventListener('change', updatePreview);
document.getElementById('cvForm').addEventListener('reset', () => {
    setTimeout(updatePreview, 0);
});

// Initialize preview
updatePreview();
