import axios from 'axios'

const jiraApi = axios.create({
    baseURL: "https://jira-server-st.herokuapp.com/"
})

export default jiraApi