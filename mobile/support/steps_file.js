// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    popHaveText(text) {
      this.see(text, '#android:id/message')
    },

    resetStudent(student) {
      this.sendPostRequest('/students', student)
      this.seeResponseCodeIsSuccessful()
    },

    async createEnroll(dataTest) {
      const response = await this.sendPostRequest('/enrolls', {
        email: dataTest.student.email,
        plan_id: dataTest.plan.id,
        price: dataTest.plan.price
      })
      this.seeResponseCodeIsSuccessful()

      return response.data.enrollment_code
    }

  });
}
