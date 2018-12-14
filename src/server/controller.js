

module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all()
            .then(response => {
                res.status(200).send(response)
            })
    },

    createItem: (req, res) => {
        const db = req.app.get('db');
        let { id, name, price, img } = req.body;
        db.create_item({ id, name, price, img })
            .then(response => {
                res.status(200).send(response)
            })
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_item({ id })
            .then(response => {
                res.status(200).send(response)
            })
    },
    editItem: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { name, price, img } = req.body;
        db.edit_item({id, name, price, img})
            .then(response => {
                res.status(200).send(response)
            })
    }
}