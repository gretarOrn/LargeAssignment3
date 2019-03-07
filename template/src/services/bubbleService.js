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
    return fetch('http://localhost:3500/api/bubbles/' + id).then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) {return {};}
        const bubble = { id: data.id, name: data.name, description: data.description, image: data.image, price: data.price};
        return bubble;
    });
};

export default {
    getAllBubbles,
    getSingleBubble
};