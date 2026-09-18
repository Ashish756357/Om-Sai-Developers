export default function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-mark" aria-hidden="true">
        OS
      </div>
      <div className="maintenance-art" aria-hidden="true">
        <div className="receipt-art">
          <span className="receipt-line receipt-line-long" />
          <span className="receipt-line" />
          <span className="receipt-line receipt-line-short" />
          <strong>₹</strong>
        </div>
        <div className="coin-art coin-art-back" />
        <div className="coin-art coin-art-front">₹</div>
      </div>
      <p className="section-kicker">Om Sai Developers</p>
      <h1>Udhar clear karo, website chalao.</h1>
      <p className="maintenance-copy">
        Lagta hai website bhi ab credit par chalne se mana kar rahi hai.
      </p>
      <p className="maintenance-alert">
        ₹1,500 ka udhaar clear karo. Warna site permanently &quot;maintenance mode&quot; mein hi
        rahegi.
      </p>
      <p className="maintenance-note">Payment received = website received</p>
    </main>
  );
}