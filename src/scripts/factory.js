const factory = Object.create({
    createHTML: (employee) => {
        return `<section class="employee">
                    <h2>Name:${employee.name}</h2>
                    <h3>Department: ${employee.department.department}</h3>
                    <p>${employee.name} uses a ${employee.computer.make} computer.</p>
                </section>`;
    },
    addToDOM: (container, HTMLString) => {
        container.innerHTML += HTMLString;
    }
});

export default factory;