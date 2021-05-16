const listSelector = {
  showDetail: 'show-survey-detail'
}

const detailSelectors = {
  title: 'survey-title',
  subTitle: 'survey-subtitle',
  coverImage: 'survey-cover-image',
  startSurvey: 'survey-start-button',
  backButton: 'back-button'
}

const quitSurveySelectors = {
  quitIcon: 'quit-survey-icon',
  quitModal: 'quit-survey-warning',
  confirmQuit: 'confirm-quit-survey',
  cancelQuit: 'cancel-quit-survey'
}

const outroSelectors = {
  message: 'outro-message',
  image: 'outro-image'
}

const questionNavigationSelectors = {
  nextQuestion: 'next-question',
  submitSurvey: 'submit-survey'
}

export { listSelector, detailSelectors, quitSurveySelectors, outroSelectors, questionNavigationSelectors }
