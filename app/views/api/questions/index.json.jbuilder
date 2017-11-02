# Under construction
json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :body
      json.questionAuthorId question.question_author_id
      json.authorName question.question_author.first_name + " " + question.question_author.last_name
      #TODO: Change to array
      json.answerIds question.answers.pluck(:id)
      json.firstAnswer question.answers.first
      json.topicIds question.topics.pluck(:id)
    end
  end
end

json.answers do
  @questions.each do |question|
    answers = question.answers
    if answers
      answers.each do |answer|
        json.set! answer.id do
          json.extract! answer, :id, :body
          json.answerAuthorId answer.answer_author_id
          json.questionId answer.question_id
          json.authorName (answer.answer_author.first_name + " " + answer.answer_author.last_name)
          json.commentIds answer.comments.pluck(:id)
        end
      end
    end
  end
end

comments = []
@questions.each do |question|
  question.answers.each do |answer|
    answer.comments.each do |comment|
      comments.push(comment)
    end
  end
end

if comments.empty?
  json.comments({})
else
  json.comments do
    comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body
        json.commentAuthorId comment.comment_author_id
        json.answerId comment.answer_id
      end
    end
  end
end

topics = []

@questions.each do |question|
  question.topics.each do |topic|
    topics.push(topic)
  end
end

if topics.empty?
  json.topics({})
else
  json.topics do
    topics.each do |topic|
      json.set! topic.id do
        json.extract! topic, :id, :name
      end
    end
  end
end
