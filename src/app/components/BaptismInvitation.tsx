import { useState } from "react";
import { motion } from "motion/react";
import { Pencil, Check } from "lucide-react";

export function BaptismInvitation() {
  const [isEditing, setIsEditing] = useState(false);
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [babyName, setBabyName] = useState("Sky");
  const [day, setDay] = useState("Samedi");
  const [date, setDate] = useState("13");
  const [month, setMonth] = useState("Juin");
  const [eventTime, setEventTime] = useState("11h00");
  const [churchName, setChurchName] = useState("À l'église Saint Gilles");
  const [churchAddress, setChurchAddress] = useState("de Etampes");
  const [receptionName, setReceptionName] = useState("A venir");
  const [phone, setPhone] = useState("06 41 34 49 27");
  const [email, setEmail] = useState("famille.martin@email.com");
  
  // RSVP Form states
  const [guestName, setGuestName] = useState("");
  const [adultsCount, setAdultsCount] = useState("1");
  const [childrenCount, setChildrenCount] = useState("0");
  const [guestMessage, setGuestMessage] = useState("");
  const [confirmedName, setConfirmedName] = useState("");
  const [confirmedAdults, setConfirmedAdults] = useState("1");
  const [confirmedChildren, setConfirmedChildren] = useState("0");

  const handleRSVP = () => {
    setShowRSVPModal(true);
  };

  const handleSubmitRSVP = async () => {
    if (!guestName.trim()) {
      alert("Veuillez entrer votre nom");
      return;
    }
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwu9SZrPKMpOV86E0Gafi1xB2fLZz9PQmb-JW5FexrSw02uLnpjtrKlJDIh0mLOPgEgxA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: guestName,
          adultsCount: adultsCount,
          childrenCount: childrenCount,
          message: guestMessage || "Aucun message"
        })
      });
      
      // Store name for success message
      setConfirmedName(guestName);
      setConfirmedAdults(adultsCount);
      setConfirmedChildren(childrenCount);
      
      // Close RSVP modal and show success message
      setShowRSVPModal(false);
      setShowSuccessMessage(true);
      
      // Reset form
      setGuestName("");
      setAdultsCount("1");
      setChildrenCount("0");
      setGuestMessage("");
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      
    } catch (error) {
      alert("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.");
      console.error("Erreur lors de l'envoi:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/30 via-blue-50/20 to-pink-50/30 flex items-center justify-center p-8">
      {/* Edit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsEditing(!isEditing)}
        className="fixed top-6 right-6 z-50 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow border-2 border-rose-200"
      >
        {isEditing ? (
          <Check className="w-6 h-6 text-green-500" />
        ) : (
          <Pencil className="w-6 h-6 text-rose-300" />
        )}
      </motion.button>

      {/* Main Card */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden relative"
      >
        {/* Top Floral Decoration */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute top-0 left-0 right-0 z-20 pointer-events-none flex justify-center"
        >
          <img
            src="public/florals-top.png"
            alt=""
            className="w-full max-w-2xl h-auto object-contain"
            style={{
              clipPath: "inset(0 0 50% 0)",
              transform: "scale(1.1) translateY(-40px)"
            }}
          />
        </motion.div>

        {/* Bottom Floral Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none flex justify-center items-end"
        >
          <img
            src="public/florals-bottom.png"
            alt=""
            className="w-full max-w-2xl h-auto object-contain"
            style={{
              transform: "scale(1.1) translateY(20px)"
            }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 py-44 md:py-48 space-y-3">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="py-2 mt-8"
          >
            {isEditing ? (
              <input
                type="text"
                value={babyName}
                onChange={(e) => setBabyName(e.target.value)}
                className="text-6xl md:text-7xl text-gray-400 italic text-center bg-rose-50/50 rounded-lg px-4 py-2 border-2 border-rose-200 focus:outline-none focus:border-rose-400 w-full max-w-md mx-auto"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              />
            ) : (
              <h1 className="text-6xl md:text-7xl text-gray-400 italic" style={{ fontFamily: "'Great Vibes', cursive" }}>
                {babyName}
              </h1>
            )}
          </motion.div>

          {/* Invitation Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-2xl md:text-3xl text-yellow-600 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
              vous invite à célébrer son baptême
            </p>
          </motion.div>

          {/* Date and Time in Calendar Format */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center py-4"
          >
            <div className="flex items-center gap-0 bg-white/80 border-2 border-gray-300 px-6 py-3 rounded-lg">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="text-sm text-gray-600 bg-rose-50/50 rounded px-2 py-1 border border-rose-200 focus:outline-none focus:border-rose-400 text-center w-20"
                    placeholder="Jour"
                  />
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="text-sm text-gray-600 bg-rose-50/50 rounded px-2 py-1 border border-rose-200 focus:outline-none focus:border-rose-400 text-center w-16"
                    placeholder="Date"
                  />
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                  <input
                    type="text"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="text-sm text-gray-600 bg-rose-50/50 rounded px-2 py-1 border border-rose-200 focus:outline-none focus:border-rose-400 text-center w-20"
                    placeholder="Mois"
                  />
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                  <input
                    type="text"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="text-sm text-gray-600 bg-rose-50/50 rounded px-2 py-1 border border-rose-200 focus:outline-none focus:border-rose-400 text-center w-16"
                    placeholder="Heure"
                  />
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-600 font-medium">{day}</p>
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                  <p className="text-sm text-gray-600 font-medium">{date}</p>
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                  <p className="text-sm text-gray-600 font-medium">{month}</p>
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                  <p className="text-sm text-gray-600 font-medium">{eventTime}</p>
                </>
              )}
            </div>
          </motion.div>

          {/* Church */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="space-y-1"
          >
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={churchName}
                  onChange={(e) => setChurchName(e.target.value)}
                  className="text-lg text-gray-600 bg-rose-50/50 rounded px-4 py-2 border-2 border-rose-200 focus:outline-none focus:border-rose-400 text-center w-full"
                />
                <input
                  type="text"
                  value={churchAddress}
                  onChange={(e) => setChurchAddress(e.target.value)}
                  className="text-lg text-gray-600 bg-rose-50/50 rounded px-4 py-2 border-2 border-rose-200 focus:outline-none focus:border-rose-400 text-center w-full"
                />
              </>
            ) : (
              <>
                <p className="text-lg text-gray-600">{churchName}</p>
                <p className="text-lg text-gray-600">{churchAddress}</p>
              </>
            )}
          </motion.div>

          {/* Decorative Line with Cross */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center justify-center gap-4 py-4"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-200"></div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-3xl text-amber-400"
            >
              ✟
            </motion.div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-200"></div>
          </motion.div>

          {/* Reception */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="pt-2"
          >
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
              Suivi d'une réception
            </p>
            {isEditing ? (
              <input
                type="text"
                value={receptionName}
                onChange={(e) => setReceptionName(e.target.value)}
                className="text-sm text-gray-600 bg-rose-50/50 rounded px-4 py-2 border-2 border-rose-200 focus:outline-none focus:border-rose-400 text-center w-full"
              />
            ) : (
              <p className="text-sm text-gray-600 italic">{receptionName}</p>
            )}
          </motion.div>

          {/* RSVP Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="pt-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRSVP}
              className="bg-white text-yellow-600 border-2 border-yellow-600 px-12 py-4 rounded-full uppercase text-xs tracking-[0.25em] shadow-lg hover:shadow-xl hover:bg-yellow-50 transition-all font-semibold"
            >
              Confirmer ma présence
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="pt-2 text-xs text-gray-400"
          >
            {isEditing ? (
              <div className="flex items-center justify-center gap-2">
                <span>📞</span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-rose-50/50 rounded px-3 py-1 border border-rose-200 focus:outline-none focus:border-rose-400 text-center text-gray-600"
                />
              </div>
            ) : (
              <p>📞 {phone}</p>
            )}
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="-mt-1"
          >
            <p className="text-gray-600 italic text-base">
              Votre présence sera le plus beau des cadeaux
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* RSVP Modal */}
      {showRSVPModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowRSVPModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-white to-rose-50/30 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md relative border-2 border-yellow-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full p-4 shadow-lg border-2 border-yellow-300">
                <span className="text-3xl">✟</span>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-gray-700 mb-2 text-center mt-6">Confirmer votre présence</h2>
            <p className="text-sm text-gray-400 text-center mb-8 italic">Nous serons ravis de vous compter parmi nous</p>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Votre nom *</label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Entrez votre nom"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 transition-colors bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Nombre d'adultes</label>
                <select
                  value={adultsCount}
                  onChange={(e) => setAdultsCount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 transition-colors bg-white"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'adulte' : 'adultes'}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Nombre d'enfants</label>
                <select
                  value={childrenCount}
                  onChange={(e) => setChildrenCount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 transition-colors bg-white"
                >
                  {[0, 1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'enfant' : 'enfants'}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Message (optionnel)</label>
                <textarea
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  placeholder="Un petit mot pour les parents..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 transition-colors resize-none bg-white"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setShowRSVPModal(false)}
                className="flex-1 bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Annuler
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleSubmitRSVP}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Confirmer
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessMessage(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-white to-rose-50/30 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md relative border-2 border-yellow-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full p-4 shadow-lg border-2 border-yellow-300">
                <span className="text-3xl">✟</span>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-gray-700 mb-2 text-center mt-6">Confirmation reçue</h2>
            <p className="text-lg text-center mb-6">
              <span className="text-4xl">✨</span>
            </p>
            <p className="text-base text-gray-600 text-center mb-4 font-medium">Merci {confirmedName} !</p>
            
            <div className="bg-white/60 rounded-2xl p-6 mb-6 border border-yellow-100">
              <p className="text-sm text-gray-500 text-center mb-3 italic">Votre confirmation a été enregistrée</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Adultes :</span>
                  <span className="text-sm text-gray-800 font-semibold">{confirmedAdults}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Enfants :</span>
                  <span className="text-sm text-gray-800 font-semibold">{confirmedChildren}</span>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">Total :</span>
                  <span className="text-base text-yellow-600 font-bold">{parseInt(confirmedAdults) + parseInt(confirmedChildren)} personne{parseInt(confirmedAdults) + parseInt(confirmedChildren) > 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center mb-6 italic">
              Nous avons hâte de vous voir ! 💕
            </p>

            <div className="flex gap-3 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setShowSuccessMessage(false)}
                className="flex-1 bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Fermer
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
