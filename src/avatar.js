// calculate the rotation matrix and joint angles input joint
export function get_joint_rotations(joint_name, joints_hierarchy, joints_offsets, frame_rotations, frame_pos) {

    let _invR = math.identity(3)
    let _r_angles, R;
    joints_hierarchy[joint_name].map((parent_name, index) => {
      if (index !== 0) {
        _r_angles = frame_rotations[parent_name]
        R = math.dotMultiply(get_R_z(_r_angles[0]), get_R_x(_r_angles[1]))
        R = math.dotMultiply(R, get_R_y(_r_angles[2]))
        _invR = math.dotMultiply(_invR, math.transpose(R))
      }
    })

    let b = math.dotMultiply(_invR, math.subtract(frame_pos[joint_name], frame_pos[joints_hierarchy[joint_name][0]]))

    let _R = Get_R2(joints_offsets[joint_name], b)
    let t = Decompose_R_ZXY(_R)
    let joint_rs = math.matrix(t)

    return joint_rs
}


// helper function that composes a chain of rotation matrices

export function get_rotation_chain(joint, hierarchy, frame_rotations) {

    hierarchy = hierarchy.reverse()

    // this code assumes ZXY rotation order
    R = np.eye(3)
    for parent in hierarchy:
        angles = frame_rotations[parent]
        _R = utils.get_R_z(angles[0])@utils.get_R_x(angles[1])@utils.get_R_y(angles[2])
        R = R @ _R

    return R
}
