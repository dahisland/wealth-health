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

  formatForDisplay() {
    return {
      firstName: this.firstName[0].toUpperCase() + this.firstName.slice(1),
      lastName: this.lastName.toUpperCase(),
      dateOfBirth: new Date(this.dateOfBirth).getTime(),
      startDate: new Date(this.startDate).getTime(),
      streetNumber: String(this.streetNumber),
      street: this.street[0].toUpperCase() + this.street.slice(1),
      city: this.city.toUpperCase(),
      state: this.state.toUpperCase(),
      zipCode: String(
        new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(
          parseInt(this.zipCode)
        )
      ),
      department: this.department.toUpperCase(),
    };
  }

  formatForSearch() {
    return {
      firstName: this.firstName[0].toUpperCase() + this.firstName.slice(1),
      lastName: this.lastName.toUpperCase(),
      dateOfBirth: new Date(this.dateOfBirth).toLocaleDateString("fr"),
      startDate: new Date(this.startDate).toLocaleDateString("fr"),
      streetNumber: String(this.streetNumber),
      street: this.street[0].toUpperCase() + this.street.slice(1),
      city: this.city.toUpperCase(),
      state: this.state.toUpperCase(),
      zipCode: String(
        new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(
          parseInt(this.zipCode)
        )
      ),
      department: this.department.toUpperCase(),
    };
  }
}
