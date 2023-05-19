const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: 'Mercedes',
                    last: 'Cristo'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/35.jpg"
                },
                login: {
                    username: 'mercedes.cristo'
                }
            }
        ]
    }
}

const mockAxiosGet = { get: jest.fn().mockResolvedValue(mockResponse) }

export default mockAxiosGet
