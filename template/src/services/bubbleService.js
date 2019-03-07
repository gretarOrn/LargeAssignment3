const getAllBubbles = () => {
    return fetch('http://localhost:3500/api/bubbles/').then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) {return [];}
        const bubbles = data.map(d => { return { id: d.id, name: d.name, description: d.description, image: d.image, price: d.price} });
        return bubbles;
    });
};

const getSingleBubble = id => {
    fetch('http://localhost:3500/api/bubbles/' + id).then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) {return [];}
        const bubbles = data.map(d => { return { id: d.id, name: d.name, description: d.description, image: d.image, price: d.price} });
        return bubbles;
    });
};

export default {getAllBubbles};