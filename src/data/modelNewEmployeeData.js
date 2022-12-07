/**
 * Create an instance object for data collected by the create employee form.
 * @class
 */
export class modelNewEmployeeData {
  constructor(data) {
    this.firstName = data.newEmployee_firstname;
    this.lastName = data.newEmployee_lastname;
    this.dateOfBirth = data.newEmployee_dateOfBirth;
    this.startDate = data.newEmployee_startDate;
    this.street = data.newEmployee_street;
    this.city = data.newEmployee_city;
    this.state = data.newEmployee_state;
    this.zipCode = data.newEmployee_zipcode;
    this.department = data.newEmployee_department;
  }

  formatNewEmployeeData() {
    return {
      firstName: this.firstName[0].toUpperCase() + this.firstName.slice(1),
      lastName: this.lastName[0].toUpperCase() + this.lastName.slice(1),
      dateOfBirth: new Date(this.dateOfBirth)
        .toLocaleDateString("fr")
        .toString(),
      startDate: new Date(this.startDate).toLocaleDateString("fr").toString(),
      street: this.street,
      city: this.city[0].toUpperCase() + this.city.slice(1),
      state: this.state,
      zipCode: this.zipCode,
      department: this.department,
    };
  }
}
