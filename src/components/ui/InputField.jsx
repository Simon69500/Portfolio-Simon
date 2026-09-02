import React from "react";

/**
 * Champ texte générique du formulaire de contact (composant "contrôlé").
 *
 * "Contrôlé" veut dire que ce composant n'a AUCUN état à lui : sa valeur affichée
 * (`value`) et sa façon de changer (`onChange`) viennent entièrement de l'extérieur
 * (ici, de useContactForm.js via Contact.jsx). React impose ainsi une source de vérité
 * unique pour les données du formulaire — sans ça, l'input aurait sa propre valeur interne
 * gérée par le navigateur, potentiellement désynchronisée de `formData` dans le hook.
 * C'est ce même patron (value + onChange fournis en props) qui est repris à l'identique
 * par TextareaField.jsx.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.id
 * @param {string} props.name
 * @param {string} [props.type]
 * @param {string} props.value
 * @param {(e: Event) => void} props.onChange
 * @param {string} [props.error]
 * @param {boolean} [props.disabled]
 * @param {string} [props.placeholder]
 */
const InputField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
  disabled,
  placeholder
}) => {
  return (
    <div className="flex flex-col gap-1 w-full mb-4">

      {/* Accessibilité : liaison explicite entre le label et l'input via htmlFor et id */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-typography-light dark:text-typography-dark"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"} // RGAA : Annonce l'erreur aux lecteurs d'écran
        className={`
          w-full px-4 py-2 rounded-lg border bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
          text-typography-light dark:text-typography-dark
          focus:outline-none focus:ring-2 transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error
            ? 'border-red-500 focus:ring-red-500' //État d'erreur visuel
            : 'border-gray-300 dark:border-gray-600 focus:ring-accent-secondary dark:focus:ring-accent-primary' //État normal avec tes couleurs d'accent
          }
        `}
      />

      {/* Feedback Visuel : Affichage dynamique de l'erreur */}
      {error && (
        <span className="text-xs text-red-500 font-medium mt-1">
          {error}
        </span>
      )}

    </div>
  );
};

export default InputField;
