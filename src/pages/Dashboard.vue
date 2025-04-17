<template>
    <h1>Dashboard</h1>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DashboardPage',
    methods: {
        getSubjectTeacher(userId) {
            axios.get(`http://localhost:3000/subjectTeachers`, {
                params: {
                    userId: userId
                }
            })
            .then(response => {
                this.getSubject(response.data[0].subjectId);
            })
            .catch(error => {
                alert('Error fetching subject teacher data: ' + error.message);
            });
        },
        getSubject(subjectId) {
            axios.get(`http://localhost:3000/subjects`, {
                params: {
                    id: subjectId
                }
            })
            .then(response => {
                alert("subject guru : " + response.data[0].subjectName);
            })
            .catch(error => {
                alert('Error fetching subject data: ' + error.message);
            });
        },
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.getSubjectTeacher(user.id);
    }
}
</script>