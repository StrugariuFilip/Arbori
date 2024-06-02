document.addEventListener('DOMContentLoaded', () => {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const initialOrder = [
        'Arborele binar',
        'Arborele binar de căutare',
        'Arborele AVL',
        'Arborele roșu-negru',
        'Arborele binomial',
        'Arborele Trie',
        'Arborele segment',
        'Arborele Splay'
    ];

    const correctOrder = [...initialOrder];
    shuffle(correctOrder);

    const shuffledOrder = [...initialOrder];
    shuffle(shuffledOrder);
    const draggablesContainer = document.getElementById('draggables-container');
    shuffledOrder.forEach((item, index) => {
        const draggable = document.createElement('div');
        draggable.id = `arbore${index + 1}`;
        draggable.className = 'arbore draggable';
        draggable.textContent = item;
        draggable.draggable = true;
        draggablesContainer.appendChild(draggable);
    });

    const draggables = document.querySelectorAll('.draggable');
    const segments = document.querySelectorAll('.segment');
    const confirmBtn = document.getElementById('confirmBtn');

    let draggedElement = null;

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggedElement = draggable;
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggedElement = null;
            draggable.classList.remove('dragging');
        });
    });

    // Add events for each segment
    segments.forEach(segment => {
        segment.addEventListener('dragover', e => {
            e.preventDefault();
        });

        segment.addEventListener('drop', e => {
            e.preventDefault();
            if (draggedElement) {
                if (segment.children.length === 0) {
                    segment.appendChild(draggedElement);
                } else {
                    const temp = segment.children[0];
                    const parentOfDragged = draggedElement.parentElement;

                    segment.appendChild(draggedElement);
                    parentOfDragged.appendChild(temp);
                }
            }
        });
    });
    confirmBtn.addEventListener('click', checkOrder);

    function checkOrder() {
        let correctCount = 0;
        segments.forEach((segment, index) => {
            if (segment.children.length > 0 && segment.children[0].textContent.trim() === correctOrder[index]) {
                correctCount++;
            }
        });
        if (correctCount === correctOrder.length) {
            alert('Felicitări! Ai poziționat corect toate cele 8 elemente!');
        } else {
            alert(`Ai ${correctCount} poziții corecte!`);
        }
    }
    solutionBtn.addEventListener('click', () => {
        const solutionList = document.createElement('ul');
        correctOrder.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            solutionList.appendChild(listItem);
        });
        solutionContainer.innerHTML = '';
        solutionContainer.appendChild(solutionList);
    });
});
