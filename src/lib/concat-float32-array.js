export const concatFloat32Array = (first, second) => {
    const result = new Float32Array(first.length + second.length);
    result.set(first);
    result.set(second, first.length);
    return result;
};

export const concatFloat32Arrays = ([head, ...rest]) => {
    if (typeof rest === 'undefined') {
        return head;
    }
    if (rest.length > 1) {
        return concatFloat32Array(head, concatFloat32Arrays(rest));
    }
    return concatFloat32Array(head, rest[0]);
};
