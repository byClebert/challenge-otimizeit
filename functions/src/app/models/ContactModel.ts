import { firestore } from 'firebase-admin'

const db = firestore().collection('contacts')

export default {
    index: async () => {
        let list = []

        await db.get()
            .then(snapshot => {
                snapshot.forEach(result => {
                    list.push({
                        id: result.id,
                        ...result.data()
                    })
                })
            })
            .catch(err => {
                throw new Error(err)
            })

        return list
    },

    show: async (id) => {
        let data = []

        await db.doc(id).get()
            .then(snapshot => {
                data.push({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            })
            .catch(err => {
                throw new Error(err)
            })
        
        return data[0]
    },

    store: async (data) => {
        let id = []

        await db.add(data)
            .then(result => {
                id.push(result.id)
            })
            .catch(err => {
                throw new Error(err)
            })
        
        return { id: id[0] }
    },

    update: async (id, data) => {
        let responseData = []

        await db.doc(id).update(data)
            .then(() => {
                responseData.push({ id, ...data })
            })
            .catch(err => {
                throw new Error(err)
            })

        return responseData[0]
    },

    delete: async (id) => {
        await db.doc(id).delete()
            .catch(err => {
                throw new Error(err)
            })
    }
}