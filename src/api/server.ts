const token = '0512e160d82b03b4eebfd5b1008a60cc5ae0126c9198dff4'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://car-inventory-350q.onrender.com/api/cars`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-350q.onrender.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-350q.onrender.com/api/cars/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
    
            })
    
            if (!response.ok) {
                throw new Error('Failed to update data on the server')
            }
    
            return await response.json()
        },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-350q.onrender.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },

}
    