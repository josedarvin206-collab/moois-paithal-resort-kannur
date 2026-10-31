document.getElementById('year').textContent = new Date().getFullYear();
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    checkin.min = localToday; checkout.min = localToday;
    checkin.addEventListener('change', () => { checkout.min = checkin.value || localToday; if (checkout.value && checkout.value <= checkin.value) checkout.value = ''; });
    document.getElementById('bookingForm').addEventListener('submit', function(e){
      e.preventDefault();
      const error = document.getElementById('formError');
      if (!this.reportValidity()) return;
      if (!checkin.value || !checkout.value || checkout.value <= checkin.value) { error.hidden = false; error.textContent = 'Please choose a check-out date after your check-in date.'; return; }
      error.hidden = true;
      const val = id => document.getElementById(id).value.trim();
      const message = `Hello MOOIS Paithal Resort, I would like to enquire about a stay.\n\nName: ${val('guestName')}\nContact number: ${val('guestPhone')}\nCheck-in: ${val('checkin')}\nCheck-out: ${val('checkout')}\nGuests: ${val('guests')}\nRooms needed: ${val('rooms')}\nAdditional details: ${val('message') || 'None'}\n\nPlease share availability, rates, inclusions and booking terms.`;
      window.open('https://wa.me/919072495909?text=' + encodeURIComponent(message), '_blank', 'noopener');
    });
    document.getElementById('menuToggle').addEventListener('click', () => { document.getElementById('about').scrollIntoView({behavior:'smooth'}); });
