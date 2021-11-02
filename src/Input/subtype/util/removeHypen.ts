const removeHypen = (innerValue: string) => innerValue.replace(/[^0-9]/g, '');

export default removeHypen;
