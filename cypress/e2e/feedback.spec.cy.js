import FeedbackPage from "../page-objects/pages/FeedbackPage"

describe('Feedback test using Fixtures', () =>{
    before(function(){
        FeedbackPage.load()
    })

    it('should submit feedback from', () =>{
        FeedbackPage.submitFeedback()
    })
})