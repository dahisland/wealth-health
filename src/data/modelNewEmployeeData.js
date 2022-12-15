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
    this.street = data.street;
    this.city = data.city;
    this.state = data.state;
    this.zipCode = data.zipCode;
    this.department = data.department;
  }

  formatNewEmployeeData() {
    return {
      firstName: this.firstName[0].toUpperCase() + this.firstName.slice(1),
      lastName: this.lastName[0].toUpperCase() + this.lastName.slice(1),
      dateOfBirth: new Date(this.dateOfBirth).getTime(),
      startDate: new Date(this.startDate).getTime(),
      street: this.street,
      city: this.city[0].toUpperCase() + this.city.slice(1),
      state: this.state,
      zipCode: this.zipCode,
      department: this.department,
    };
  }
  formatForSearch() {
    return {
      firstName: this.firstName.toLowerCase(),
      lastName: this.lastName.toLowerCase(),
      dateOfBirth: new Date(this.dateOfBirth).toLocaleDateString("fr"),
      startDate: new Date(this.startDate).toLocaleDateString("fr"),
      street: this.street.toLowerCase(),
      city: this.city.toLowerCase(),
      state: this.state.toLowerCase(),
      zipCode: this.zipCode,
      department: this.department.toLowerCase(),
    };
  }
}
