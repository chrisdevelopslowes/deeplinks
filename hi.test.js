test('Renders PostFeed component', () => {
    const firstMockedFetch = fetchPosts(0)
    firstMockedFetch.mockReturnValueOnce(response1)
    const secondMockedFetch = fetchPosts(1)
    secondMockedFetch.mockReturnValueOnce(response2)

    // Render component
    // Check Test Title 1, Test Title 5
    // Scroll down
    // Check Test title 50 is displayed

})

var response1 = {
    "content" : [
        {
            "img" : "url",
            "title" : "Test Title 1",
            "msg" : "Message"
        },
        {
            "img" : "url",
            "title" : "Title2",
            "msg" : "Message"
        },
        {
            "img" : "url",
            "title" : "Title3",
            "msg" : "Message"
        },
        {
            "img" : "url",
            "title" : "Title4",
            "msg" : "Message"
        },
        {
            "img" : "url",
            "title" : "Title5",
            "msg" : "Message"
        },
        {
            "img" : "url",
            "title" : "Test Title 5",
            "msg" : "Message"
        }
    ]
}


var response2 = {
    "content" : [
        {
            "img" : "url2",
            "title" : "Test Title 50",
            "msg" : "Message2"
        },
        {
            "img" : "url2",
            "title" : "Title2",
            "msg" : "Message2"
        },
        {
            "img" : "url2",
            "title" : "Title2",
            "msg" : "Message2"
        },
        {
            "img" : "url2",
            "title" : "Title2",
            "msg" : "Message2"
        },
        {
            "img" : "url2",
            "title" : "Title2",
            "msg" : "Message2"
        },
        {
            "img" : "url2",
            "title" : "Title2",
            "msg" : "Message2"
        }
    ]
}

