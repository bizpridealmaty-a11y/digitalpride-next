/**
 * Yandex.Metrika goal tracking utility
 * Counter ID: 79798549
 *
 * Goals:
 *   whatsapp_click    — any WhatsApp link/button click
 *   phone_click       — any tel: link click
 *   lead_form_submit  — audit form submission (LeadMagnet)
 *   school_signup     — school / course signup click
 */

const YM_COUNTER_ID = 79798549;

declare global {
    interface Window {
        ym?: (...args: unknown[]) => void;
    }
}

export function reachGoal(goal: string, params?: Record<string, unknown>) {
    try {
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(YM_COUNTER_ID, 'reachGoal', goal, params);
        }
    } catch {
        // silently ignore analytics errors
    }
}

export function trackWhatsAppClick(source?: string) {
    reachGoal('whatsapp_click', { source: source || 'unknown' });
}

export function trackPhoneClick(source?: string) {
    reachGoal('phone_click', { source: source || 'unknown' });
}

export function trackLeadFormSubmit() {
    reachGoal('lead_form_submit');
}

export function trackSchoolSignup(plan?: string) {
    reachGoal('school_signup', { plan: plan || 'unknown' });
}
