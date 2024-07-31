// Ajouter des fonctionnalités JavaScript pour gérer les utilisateurs, les projets, et les formations
function addUser() {
    const userList = document.getElementById('userList');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = 'Nouvel utilisateur ajouté';
    userList.appendChild(userDiv);
}

function addProject() {
    const projectList = document.getElementById('projectList');
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = 'Nouveau projet ajouté';
    projectList.appendChild(projectDiv);
}

function addTraining() {
    const trainingList = document.getElementById('trainingList');
    const trainingDiv = document.createElement('div');
    trainingDiv.innerHTML = 'Nouvelle formation ajoutée';
    trainingList.appendChild(trainingDiv);
}
