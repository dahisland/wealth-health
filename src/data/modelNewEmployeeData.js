/**
 * Create an instance object for data collected by the create employee form.
 * @class
 */
export class modelNewEmployeeData {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.dateOfBirth = data.dateOfBirth;
    this.startDate = data.startDate;
    this.streetNumber = data.streetNumber;
    this.street = data.street;
    this.city = data.city;
    this.state = data.state;
    this.zipCode = data.zipCode;
    this.department = data.department;
  }

  formatForSearch() {
    return {
      firstName: this.firstName.toLowerCase(),
      lastName: this.lastName.toLowerCase(),
      dateOfBirth: new Date(this.dateOfBirth).getTime(),
      startDate: new Date(this.startDate).getTime(),
      streetNumber: this.streetNumber,
      street: this.street.toLowerCase(),
      city: this.city.toLowerCase(),
      state: this.state.toLowerCase(),
      zipCode: this.zipCode,
      department: this.department.toLowerCase(),
    };
  }
}
