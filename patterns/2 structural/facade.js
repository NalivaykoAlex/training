// facade sctrucural patttern

class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {

  }

  add(complaint) {
    this.complaints.push(complaint);

    return this.reply(complaint);
  }
}

class ProductCompaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceCompaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'service') {
      complaint = new ServiceCompaints();
    } else {
      complaint = new ProductCompaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register('Alex', 'service', 'недоступен'));
console.log(registry.register('Daria', 'product', 'вылазит ошибка'));
