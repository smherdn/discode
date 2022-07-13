using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    Rigidbody rb;
    [SerializeField] float movementSpeed;
    [SerializeField] float jumpForce;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        movementSpeed = 5f;
        jumpForce = 5f;
    }
    void Update()
    {
        if (Input.GetKey("w"))
        {
            rb.velocity = new Vector3(movementSpeed, rb.velocity.y, rb.velocity.z);
        }
        if (Input.GetKey("a"))
        {
            rb.velocity = new Vector3(rb.velocity.x, rb.velocity.y, -movementSpeed);
        }
        if (Input.GetKey("s"))
        {
            rb.velocity = new Vector3(-movementSpeed, rb.velocity.y, rb.velocity.z);
        }
        if (Input.GetKey("d"))
        {
            rb.velocity = new Vector3(rb.velocity.x, rb.velocity.y, movementSpeed);
        }
        if (Input.GetKeyDown(KeyCode.Space) && IsGrounded())
        {
            rb.velocity = new Vector3(rb.velocity.x, jumpForce, rb.velocity.z);
        }
        if (Input.GetKey("q"))
        {
            rb.transform.localScale -= 1;
        }
    }
    bool IsGrounded() {
        return Physics.Raycast(transform.position, -Vector3.up, collider.bounds.extents.y + 0.1);
    }
}