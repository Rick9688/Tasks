

function Student(name, email) {
    let studentName = name;
    let studentEmail = email;
    const homeworkResults = [];
    let _homeworkResults = homeworkResults;

    this.getName = function () {
        return studentName;
    };

    this.getEmail = function () {
        return studentEmail;
    };

    this.addHomeworkResult = function (topic, success) {
        homeworkResults.push({
            topic,
            success
        });
    }

    this.getHomeworkResults = function () {
        return _homeworkResults;
    };

}

function FrontendLab(students, failedLimit) {
    let failedHomeworkLimit = failedLimit;
    const studentsList = students.map((student) => {
        return new Student(student.name, student.email);
    });
    this.printStudentsList = function () {
        studentsList.forEach(student => console.log(student.getName(),
            student.getEmail(), student.getHomeworkResults()));
    };
    this.addHomeworkResults = function (homeworkResult) {
        let topicName = homeworkResult.topic;
        let studentsResultsForTopic = homeworkResult.results;
        studentsResultsForTopic.forEach(result => {
            let email = result.email;
            studentsList.forEach(student => {
                if (student.getEmail() === email) {
                    student.addHomeworkResult(topicName, result.success)
                }
            });
        });
    };
    this.printStudentsEligibleForTest = function () {
        studentsList.forEach(student => {
            let studentResults = student.getHomeworkResults();
            let counter = 0;

            studentResults.forEach(result => {
                if (!result.success) {
                    counter++;
                }
            })

            if (counter <= failedHomeworkLimit) {
                console.log(student.getName(), student.getEmail());
            }
        })
    }

}


const std = new Student('Rick', 'jh@gmail.com')
std.getName()



