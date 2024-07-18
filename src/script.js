document.getElementById('sales-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const productCode = document.getElementById('product-code').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;

    const data = {
        productCode,
        description,
        quantity
    };

    const response = await fetch('http://localhost:3000/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Report submitted successfully!');
    } else {
        alert('Failed to submit report.');
    }
});
